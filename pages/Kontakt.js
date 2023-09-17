import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

export default function Kontakt() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center mt-8 sm:mt-20">
          <form className="flex flex-col bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] shadow-md rounded p-8  h-full text-sm sm:text-md lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl  " action="/send-data-here" method="post">
            <label className="mb-4" htmlFor="first">
              <input className=" shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="first" name="first" placeholder="Your Name" required />
            </label>
            <label className="mb-4" htmlFor="last">
              <input className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="last" name="last" placeholder=" Your Surname" required />
            </label>
            <label className="mb-4" htmlFor="last">
              <input className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="last" name="last" placeholder="Your Email" required />
            </label>
            <label className="mb-4" htmlFor="last">
              <input className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="last" name="last" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
            </label>
            <label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline leading-6" name="postContent" placeholder="Message" rows={4} cols={50} />
            </label>
            <button className="text-blue-500 text-lg sm:text-xl hover:text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send Message &ndash;&gt;</button>
          </form>
        <div className="sm:flex sm:flex-col lg:w-3/12 m-8 sm:m-8 md:mx-64 lg:m-8 ">
          <div className="text-2xl sm:text-3xl 4xl:text-4xl mb-8 font-RedHatItalic font-medium text-center">Dane Kontaktowe</div>
          <div className="text-xl 4xl:text-3xl mb-4  font-RedHatItalic font-light">
            Email:
            <span className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light"> BielIBlask@gmail.com</span>
          </div>
          <div className="text-lg 4xl:text-3xl sm:text-xl mb-8 font-RedHatItalic font-light">
            Email:
            <span className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light"> Prywatny@gmail.com</span>
          </div>
          <div className="text-lg 4xl:text-3xl sm:text-xl mb-8 font-RedHatItalic font-light">
            Telefon:
            <span className="text-lg 4xl:text-2xl  sm:text-xl font-RedHatItalic font-light">  +48 123 123 123</span>
          </div>
          <div className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light text-center">
            Szukasz czegoś innego? Masz własny pomysł na kształt lampy? Nie bój się napisać do nas jesteśmy mili ludzie 😉 Pomożemy, doradzimy. Odpowiedź otrzymasz odrazu albo w ciągu 2 nastepnych dni w razie czego zawsze może dzwonić od 8:00 do 15:00. Lampy same się nie zrobią.
          </div>
        </div>
      </div>
      <div className="flex justify-center text-4xl w-full py-4 mt-20 mb-8 custom-underline-overline font-RedHatItalic font-medium italic">
        FAQ
      </div>
      <div className="flex flex-col my-8 mx-12 text-xl">

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy możecie stworzyć lampę na zamówienie z moim własnym projektem lub pomysłem?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] 4xl:text-xl sm:text-md">Tak, jesteśmy specjalistami w tworzeniu customowych lamp na podstawie Twojego pomysłu lub projektu. Skontaktuj się z nami, aby omówić szczegóły!</div>

        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Jakie materiały są dostępne do stworzenia customowej lampy?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] 4xl:text-xl sm:text-md">Mamy szeroki wybór materiałów, takich jak drewno, metal, szkło, ceramika i inne. Możemy dostosować lampę do Twoich preferencji pod względem materiałów i stylu.</div>

        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy mogę wybrać kształt, rozmiar i kolor lampy na zamówienie?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] 4xl:text-xl sm:text-md">Oczywiście! Jesteśmy gotowi dostosować kształt, rozmiar, kolor i inne detale, aby stworzyć lampę idealnie pasującą do Twojego wnętrza.</div>

        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Ile czasu zajmuje stworzenie customowej lampy?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Czas produkcji zależy od skomplikowania projektu i obciążenia pracą. Zazwyczaj informujemy o szacunkowym czasie realizacji przy składaniu zamówienia.</div>

        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy oferujecie usługę instalacji customowej lampy w moim domu?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Niestety, nie oferujemy usług instalacyjnych, ale zapewnimy szczegółowe instrukcje montażu. W razie pytań lub problemów jesteśmy dostępni, aby pomóc zdalnie.</div>

        </div>

      </div>
      <Footer />
    </main>
  );
}
