package au.edu.rmit.sept.superprice.Controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.AdditionalAnswers.returnsFirstArg;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import au.edu.rmit.sept.superprice.model.Notification;
import au.edu.rmit.sept.superprice.service.NotificationService;
import au.edu.rmit.sept.superprice.web.NotificationController;

@SpringBootTest
public class OrderControllerTest {

    NotificationController notificationController;
    NotificationService notificationService;

    @BeforeEach
    void initializeObjects() {
        this.notificationService = mock(notificationService.class);
        this.notificationController = new notificationController(this.notificationService);
    }

}