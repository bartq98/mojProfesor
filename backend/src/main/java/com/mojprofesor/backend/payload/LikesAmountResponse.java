/*
 *  Copyright (c) 2021, Onteon Tech and/or its affiliates.
 *  All rights reserved.
 *  Use is subject to license terms.
 */
package com.mojprofesor.backend.payload;

import lombok.Data;

/**
 * @author Patryk Borchowiec
 * @since 0.0.0
 */
@Data
public class LikesAmountResponse {
    private final int up;
    private final int down;
}
