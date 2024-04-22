public class Main {
    public static void main(String[] args) {
        // Criando um array de nomes de alunos
        String[] nomesAlunos = {"João", "Maria", "Pedro", "Ana"};

        // Imprimindo os nomes dos alunos usando o laço de repetição tradicional (for)
        System.out.println("Usando o for tradicional:");
        for (int i = 0; i < nomesAlunos.length; i++) {
            System.out.println(nomesAlunos[i]);
        }

        // Imprimindo os nomes dos alunos usando o for aprimorado (enhanced for)
        System.out.println("\nUsando o for aprimorado:");
        for (String nome : nomesAlunos) {
            System.out.println(nome);
        }
    }
}