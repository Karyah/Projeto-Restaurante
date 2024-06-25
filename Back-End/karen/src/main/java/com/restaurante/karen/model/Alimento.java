package com.restaurante.karen.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Alimento {
	
	private String titulo;
	private String imagem;
	private String preco;
	private String descricao;
	private TipoAlimento tipoAlimento;
}
