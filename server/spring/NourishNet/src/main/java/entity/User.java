package entity;

import jakarta.persistence.*;
import lombok.Data;
import org.locationtech.jts.geom.Point;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String role; // "DONOR" or "VOLUNTEER"

    @Column(nullable = false)
    private String password;

    @Column(columnDefinition = "geometry(Point, 4326)")
    private Point location;
}