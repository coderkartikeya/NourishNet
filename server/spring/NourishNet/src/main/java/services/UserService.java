package services;
import entity.User;
import org.springframework.stereotype.Service;
import repository.UserRepository;

@Service
public interface UserService {



    public User registerUser(User user);

    public User findByEmail(String email);

    public User updateUserLocation(Long userId,Double lat,Double lng );

    public User getUserProfileById(Long userId);

    /*
    Optional : Get user success rate
     */



}
