package com.NourishNet.NourishNet.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.locationtech.jts.geom.Point;

@Setter
@Getter
@Entity
@Table(name = "donations")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String foodItem;

    private Integer quantity;

    private String status;

    @Column(columnDefinition = "geometry(Point, 4326)")
    private Point location;

}
