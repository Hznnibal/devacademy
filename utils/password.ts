import bcrypt from "bcryptjs";

export async function saltAndHashPassword(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Erreur lors du hachage du mot de passe");
  }
}
