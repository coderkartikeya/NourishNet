package entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Donation")

public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String foodItem;

    private Integer quantity;

    private org.locationtech.jts.geom.Point location;




}
