package com.app.service;

import java.time.LocalDate;
import java.util.List;

//import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IBookingRecord;
import com.app.dao.IBookingRecordJpa;
import com.app.pojos.BookingRecord;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ICustomerServiceImpl implements ICustomerService {
	 
    @Autowired
    private IBookingRecord bookingDao;
    
    @Autowired
    private IBookingRecordJpa jpaBookingDao;

    public ICustomerServiceImpl() {
        System.out.println("Customer service default constructor...");
    }

    @Override
    public List<Venue> getAvailableVenues(LocalDate startDate, LocalDate endDate, VenuePackage venuePackage) {
        return bookingDao.getAvailableVenues(startDate, endDate, venuePackage);
    }

    @Override
    public List<BookingRecord> getAllRecords(User user) {
        return jpaBookingDao.findByBookedBy(user);
    }
}