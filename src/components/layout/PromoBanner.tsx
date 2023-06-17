const PromoBanner = () => {
  const generatePromoCode = (): string => {
    const today = new Date();
    const month = today.toLocaleDateString('id-ID', { month: 'long' });
    const date = today.getDate();

    return `${month.toUpperCase()}${date}`;
  };

  return (
    <div className="bg-black text-sm h-10 flex justify-center items-center md:px-0 px-5 text-white">
      Gunakan kode promo <span className="font-bold mx-2">{generatePromoCode()}</span> untuk mendapatkan diskon 50%!
    </div>
  )
}

export default PromoBanner;