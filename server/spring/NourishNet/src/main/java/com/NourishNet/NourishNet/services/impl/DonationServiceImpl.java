package com.NourishNet.NourishNet.services.impl;

import com.NourishNet.NourishNet.dto.donation.DonationRequestDto;
import com.NourishNet.NourishNet.dto.donation.DonationResponseDto;
import com.NourishNet.NourishNet.entity.Donation;
import com.NourishNet.NourishNet.repository.DonationRepository;
import com.NourishNet.NourishNet.services.DonationService;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonationServiceImpl implements DonationService {


    private final  DonationRepository donationRepository;
    public DonationServiceImpl(DonationRepository donationRepository){
        this.donationRepository=donationRepository;
    }

    private final GeometryFactory geometryFactory = new GeometryFactory();

    @Override
    public DonationResponseDto createDonation(DonationRequestDto donationRequestDto) {
        Donation donation = new Donation();
        donation.setFoodItem(donationRequestDto.getFoodItem());
        donation.setQuantity(donationRequestDto.getQuantity());
        donation.setStatus("PENDING"); // Default status

        if (donationRequestDto.getLatitude() != null && donationRequestDto.getLongitude() != null) {
            Point point = geometryFactory.createPoint(new Coordinate(donationRequestDto.getLongitude(), donationRequestDto.getLatitude()));
            donation.setLocation(point);
        }

        Donation savedDonation = donationRepository.save(donation);
        return mapToDto(savedDonation);
    }

    @Override
    public DonationResponseDto getDonationById(Long id) {
        Donation donation = donationRepository.findById(id).orElseThrow(() -> new RuntimeException("Donation not found"));
        return mapToDto(donation);
    }

    @Override
    public List<DonationResponseDto> getAllDonations() {
        List<Donation> donations = donationRepository.findAll();
        return donations.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    private DonationResponseDto mapToDto(Donation donation) {
        DonationResponseDto dto = new DonationResponseDto();
        dto.setId(donation.getId());
        dto.setFoodItem(donation.getFoodItem());
        dto.setQuantity(donation.getQuantity());
        dto.setStatus(donation.getStatus());
        if (donation.getLocation() != null) {
            dto.setLatitude(donation.getLocation().getY());
            dto.setLongitude(donation.getLocation().getX());
        }
        return dto;
    }
}
