package com.app.pojos;

//import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="decoration_details")
public class Decoration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="deco_id")
    private Integer decorationId;

    @Column(name="deco_desc", length = 500)
    private String decorationDescription;

    @Column(name="deco_price")
    private double decorationPrice;

    @ManyToOne
    @JoinColumn(name = "v_id")
    @JsonBackReference
    private Venue decorationVenue;  // Corrected spelling

    // Default Constructor
    public Decoration() {
        System.out.println("In Decoration default constructor");
    }

    // Parameterized Constructor
    public Decoration(String decorationDescription, double decorationPrice) {
        this.decorationDescription = decorationDescription;
        this.decorationPrice = decorationPrice;
    }

    // Getters and Setters
    public Integer getDecorationId() {
        return decorationId;
    }

    public void setDecorationId(Integer decorationId) {
        this.decorationId = decorationId;
    }

    public String getDecorationDescription() {
        return decorationDescription;
    }

    public void setDecorationDescription(String decorationDescription) {
        this.decorationDescription = decorationDescription;
    }

    public double getDecorationPrice() {
        return decorationPrice;
    }

    public void setDecorationPrice(double decorationPrice) {
        this.decorationPrice = decorationPrice;
    }

    public Venue getDecorationVenue() {  // Corrected spelling
        return decorationVenue;
    }

    public void setDecorationVenue(Venue decorationVenue) {  // Corrected spelling
        this.decorationVenue = decorationVenue;
    }

    // toString Method
    @Override
    public String toString() {
        return "Decoration [decorationId=" + decorationId + ", decorationDescription=" + decorationDescription
                + ", decorationPrice=" + decorationPrice + "]";
    }
}
