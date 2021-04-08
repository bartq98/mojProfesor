package com.mojprofesor.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Patryk Borchowiec
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "stars")
public class StarEntity {
    @Id
    @GeneratedValue
    private long id;

    private long opinionId;

    private long userId;
}
