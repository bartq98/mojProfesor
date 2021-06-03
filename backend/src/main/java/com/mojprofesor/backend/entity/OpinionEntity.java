package com.mojprofesor.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "opinion")
public class OpinionEntity {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private ProfessorEntity professor;

    @ManyToOne
    private UserEntity user;
    private String content;
    private String details;

}
