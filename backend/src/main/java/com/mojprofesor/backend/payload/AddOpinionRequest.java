package com.mojprofesor.backend.payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class AddOpinionRequest {

    @NotBlank
    @Size(min = 3, max = 300)
    private String content;

    @NotBlank
    private String details;

    @NotNull
    private Long professorId;
}
