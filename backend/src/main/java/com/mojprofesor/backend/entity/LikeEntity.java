package com.mojprofesor.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author Patryk Borchowiec
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "likes")
public class LikeEntity {
    @Id
    @GeneratedValue
    private long id;

    private LikeType type;

    private long opinionId;

    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity user;
}
