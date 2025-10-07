export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Martin Jimenez";
  }

  if (query.toLowerCase().includes("largest") || query.toLowerCase().includes("smallest")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    let result = 0;

    if (query.toLowerCase().includes("largest")) {
      result = Math.max(...numbers);
    }

    return result.toString();
  }

  if (
    query.toLowerCase().includes("plus") ||
    query.toLowerCase().includes("minus") ||
    query.toLowerCase().includes("times") ||
    query.toLowerCase().includes("divided by")
  ) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    let result = 0;

    if (query.toLowerCase().includes("plus")) {
      result = numbers[0] + numbers[1];
    } else if (query.toLowerCase().includes("minus")) {
      result = numbers[0] - numbers[1];
    } else if (query.toLowerCase().includes("times")) {
      result = numbers[0] * numbers[1];
    } else if (query.toLowerCase().includes("divided by")) {
      result = numbers[0] / numbers[1];
    }

    return result.toString();
  }

  return "";
}
