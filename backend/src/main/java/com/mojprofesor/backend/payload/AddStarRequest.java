package com.mojprofesor.backend.payload;

import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * @author Patryk Borchowiec
 * @since 0.0.0
 */
@Data
public class AddStarRequest {
    @NotNull
    private Integer opinion;
}
