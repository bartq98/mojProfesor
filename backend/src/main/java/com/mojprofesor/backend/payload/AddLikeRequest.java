package com.mojprofesor.backend.payload;

import com.mojprofesor.backend.entity.LikeType;
import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * @author Patryk Borchowiec
 */
@Data
public class AddLikeRequest {
    @NotNull
    private Integer opinion;

    @NotNull
    private LikeType type;
}
