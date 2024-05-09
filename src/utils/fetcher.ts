// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async (file: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.PUBLIC_URL}/assets/data/${file}`,
    );
    if (!response.ok) {
      throw new Error(
        `Unable to Fetch Data, Please check URL or Network connectivity!`,
      );
    }
    return response.json();
  } catch (error) {
    console.error('Some Error Occured:', error);
  }
};
