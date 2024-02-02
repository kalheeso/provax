package com.github.kalheeso.provax.domain;

public enum UsuarioRole {
    ADMIN("admin"),
    USER("user");

    private final String role;

    UsuarioRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}