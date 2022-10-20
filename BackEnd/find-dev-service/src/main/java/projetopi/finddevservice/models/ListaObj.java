package projetopi.finddevservice.models;

import java.util.Arrays;

public class ListaObj <T> {
    private final T[] vetor;
    private int nroElem;

    public ListaObj(int tamanho) {
        vetor = (T[]) new Object[tamanho];
        nroElem = 0;
    }

    public void adiciona(T elemento) {
        if (nroElem >= vetor.length) {
            System.out.println("Lista está cheia");
        } else {
            vetor[nroElem++] = elemento;
        }
    }

    public void exibe() {
        if (nroElem == 0) {
            System.out.println("\nA lista está vazia.");
        } else {
            System.out.println("\nElementos da lista:");
            for (int i = 0; i < nroElem; i++) {
                System.out.print(vetor[i] + "\t");
            }
            System.out.println();
        }
    }

    public int busca(T elementoBuscado) {
        for (int i = 0; i < nroElem; i++) {
            if (vetor[i].equals(elementoBuscado)) {
                return i;
            }
        }
        return -1;
    }

    public boolean removePeloIndice (int indice) {
        if (indice < 0 || indice >= nroElem) {
            System.out.println("\nÍndice inválido!");
            return false;
        }

        for (int i = indice; i < nroElem - 1; i++) {
            vetor[i] = vetor[i+1];
        }
        nroElem--;
        return true;
    }

    public boolean removeElemento(T elementoARemover) {
        return removePeloIndice(busca(elementoARemover));
    }

    public int getTamanho() {
        return nroElem;
    }

    public T getElemento(int index) {
        if (index < 0 || index >= nroElem) return null;

        for (int i = 0; i < vetor.length; i++) {
            if (i == index) {
                return vetor[i];
            }
        }

        return null;
    }

    public void limparVetor() {
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = null;
        }

        nroElem = 0;
    }

    public void set(int index, T elemento) {
        if (index >= 0 && index < vetor.length) {
            vetor[index] = elemento;
        }
    }
}
