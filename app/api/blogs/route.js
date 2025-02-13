export const GET = async (req, res) => {
  const { data, error } = await supabase.from("blogs").select("*");
  return new Response(JSON.stringify(data), { status: 200 });
};
