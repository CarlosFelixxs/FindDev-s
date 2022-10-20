package projetopi.finddevservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import projetopi.finddevservice.models.Avaliacao;
import projetopi.finddevservice.models.Desenvolvedor;

@SpringBootApplication
public class FindDevServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FindDevServiceApplication.class, args);

		Desenvolvedor d = new Desenvolvedor();

		d.addAvaliacao(new Avaliacao(1));
		d.addAvaliacao(new Avaliacao(5));
		d.addAvaliacao(new Avaliacao(2));
		d.addAvaliacao(new Avaliacao(4));
		d.addAvaliacao(new Avaliacao(3));

		System.out.println("Avaliacoes inseridas:");
		d.exibeAvaliacoes();

		System.out.println("\nAvaliacoes ordenadas pelas notas:");
		d.ordenarAvaliacoes();
		d.exibeAvaliacoes();
	}
}
