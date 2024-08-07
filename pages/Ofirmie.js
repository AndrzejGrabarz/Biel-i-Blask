import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Ofirmie() {
  return (
    <main className=" min-h-screen w-full items-center ">
      <Navbar />
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row items-center mt-16 mb-12 mx-auto 4xl:mx-96 ">

        <div className="">
          <div className="w-[280px] h-[380px]  sm:w-[400px] sm:h-[500px] mb-8 2xl:ml-40 ">
            <Image
              className="rounded shadow-2xl"
              src="/Benedykt.jpg"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-col text-center sm:flex-col  sm:h-full sm:p-8 mx-auto 2xl:mx-auto 4xl:mx-12 ">
          <div className="text-3xl sm:text-4xl m-8 font-RedHatItalic font-medium italic">O mnie</div>
          <div className=" text-lg sm:text-2xl font-RedHatItalic font-light mx-4 sm:mx-auto">
            Benedykt Możdżeń, absolwent Wydziału Ceramiki i Szkła ASP we Wrocławiu. Dyplom w pracowni prof. Krystyny Cybińskiej. Zajmuje się ceramiką unikatową i przemysłową. Prace artystyczne znajdują się w zbiorach prywatnych i muzeach. Inspiracji dla swoich prac poszukuje w pięknie natury organicznej. Projektuje i wykonuje elementy dekoracyjne i użytkowe do wnętrz takie jak lampy, wazony, patery, formy przestrzenne.
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col 4xl:flex-row items-center justify-center mt-12 mb-12 mx-auto  sm:p-8 2xl:mx-80 ">
        <div>
          <div className="w-[300px] h-[400px]  sm:w-[400px] sm:h-[500px] mb-8 ">
            <Image
              className="rounded shadow-2xl"
              src="/LotosOff.jpg"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:text-center sm:flex-col  sm:h-full  mx-auto ">
          <div className=" text-3xl sm:text-4xl my-8 font-RedHatItalic font-medium italic m-8">Filozofia</div>
          <div className="text-lg sm:text-2xl font-RedHatItalic font-light p-8">
            Wykorzystując przeświecalność porcelany i autorską technikę tworzę nastrojowe i unikatowe lampy. Każda jest niepowtarzalna, ma indywidualny charakter, łączy funkcjonalność z oryginalną formą. Lampy dzięki ręcznemu procesowi tworzenia zyskują duszę i charakter. Forma i światło pozwalają na aranżację niepowtarzalnej i nastrojowej przestrzeni.Porcelana jest szlachetnym i wymagającym tworzywem ceramicznym. Proces powstawania dzieła wymaga cierpliwości i czasu, ale efekt końcowy jest ukoronowaniem pasji tworzenia.
          </div>
        </div>
        <div>
          <div className=" w-[300px] h-[400px]  sm:w-[400px] sm:h-[500px] my-8">
            <Image
              className="rounded shadow-2xl"
              src="/LotosOn.jpg"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
