package com.app.pojos;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Gender {
    MALE, FEMALE, OTHER;

    @JsonCreator
    public static Gender fromString(String key) {
        if (key == null || key.isEmpty()) {
            return null; // or return a default value
        }
        try {
            return Gender.valueOf(key.toUpperCase());
        } catch (IllegalArgumentException e) {
            return null; // or handle the error in a way that suits your needs
        }
    }

    @JsonValue
    public String toValue() {
        return name();
    }
}