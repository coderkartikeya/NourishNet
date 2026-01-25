package com.NourishNet.NourishNet.repository;

import com.NourishNet.NourishNet.entity.User;
import com.NourishNet.NourishNet.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DonationRepository extends JpaRepository<Donation,Long> {
    /*
    @parms Donar or resturant Id
    Function : To find the All the Donations of the particular resturant/ donar
     */
    Optional<Donation> findById(Long Id);

    /*
    @params : Status (Pending or Delivered )
     */
    List<Donation> findByStatus(String status);


    /*
    @params : Latitude and Longitude of the Donations
    Function : Finding the near available food for the volunteer and send notification
     */
    @Query(value = "SELECT * FROM donations d WHERE d.status = 'PENDING' AND " +
            "ST_DistanceSphere(d.location, ST_MakePoint(:lng, :lat)) <= :distance",
            nativeQuery = true)
    List<Donation> findNearbyAvailableFood(
            @Param("lng") double lng,
            @Param("lat") double lat,
            @Param("distance") double distance
    );

    /*
   @params : Latitude and Longitude of the Donations
   Function : Finding the near available Volunteer for the Donation and send notification
    */
    @Query(value = "SELECT * FROM users u WHERE u.role = 'VOLUNTEER' AND " +
            "ST_DWithin(u.location::geography, ST_SetSRID(ST_MakePoint(:lng, :lat), 4326)::geography, :distance)",
            nativeQuery = true)
    List<User> findNearbyVolunteers(
            @Param("lng") double lng,
            @Param("lat") double lat,
            @Param("distance") double distance
    );





}