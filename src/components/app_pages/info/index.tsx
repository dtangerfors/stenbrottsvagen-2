import React from "react";
import type { PageProps } from "gatsby";
import FixedHeader from "../../FixedHeader";

const AppInfoPage: React.FC<PageProps> = () => {
  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Info</h1>
      </FixedHeader>
      <main>
        <section  className="px-8 pt-20 mt-20">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-sm shadow-xl shadow-black-900/5 pt-8 pb-12 bg-white w-full dark:bg-black-800">
                <div className="text-center mb-10">
                  <h3 className="font-sans text-title2 text-black-900 dark:text-white">
                    Hyra
                  </h3>
                </div>
                <table className="relative w-full text-left text-headline text-black-900 dark:text-gray-100">
                  <tbody>
                    <tr>
                      <th className="pb-2 first:pl-8 last:pr-8">Antal veckor</th>
                      <th className="pb-2 first:pl-8 last:pr-8">Vuxen</th>
                      <th className="pb-2 first:pl-8 last:pr-8">Barn</th>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-black-700">
                      <td className="py-2 first:pl-8 last:pr-8">En vecka</td>
                      <td className="py-2 first:pl-8 last:pr-8">300 kr</td>
                      <td className="py-2 first:pl-8 last:pr-8">100 kr</td>
                    </tr>
                    <tr>
                      <td className="py-2 first:pl-8 last:pr-8">
                        Upp till två veckor
                      </td>
                      <td className="py-2 first:pl-8 last:pr-8">400 kr</td>
                      <td className="py-2 first:pl-8 last:pr-8">150 kr</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-black-700">
                      <td className="py-2 first:pl-8 last:pr-8">Två veckor</td>
                      <td className="py-2 first:pl-8 last:pr-8">500 kr</td>
                      <td className="py-2 first:pl-8 last:pr-8">200 kr</td>
                    </tr>
                    <tr className="text-gray-600 dark:text-gray-100">
                      <td colSpan={3} className="pt-8 px-8">
                        Uthyrning för vecka 3500:- Pengarna insättes på konto:
                        5217&nbsp;167&nbsp;0357&nbsp;77 (SEB), senast samma år.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="rounded-sm shadow-xl shadow-black-900/5 pt-8 pb-12 bg-white w-full dark:bg-black-800">
                <div className="text-center mb-10">
                  <h3 className="font-sans text-title2 text-black-900 dark:text-white">
                    Sophämtning
                  </h3>
                </div>
                <table className="relative w-full text-left text-headline text-black-900 dark:text-gray-100">
                  <tbody>
                    <tr>
                      <th className="pb-2 first:pl-8 last:pr-8">Hämtning</th>
                      <th className="pb-2 first:pl-8 last:pr-8">Period</th>
                      <th className="pb-2 first:pl-8 last:pr-8">Tisdag</th>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-black-700">
                      <td className="py-2 first:pl-8 last:pr-8">Brännbart</td>
                      <td className="py-2 first:pl-8 last:pr-8">14-dag</td>
                      <td className="py-2 first:pl-8 last:pr-8">Udda v</td>
                    </tr>
                    <tr>
                      <td className="py-2 first:pl-8 last:pr-8">Kompost</td>
                      <td className="py-2 first:pl-8 last:pr-8">14-dag</td>
                      <td className="py-2 first:pl-8 last:pr-8">Jämn v</td>
                    </tr>
                    <tr className="text-gray-600 dark:text-gray-100">
                      <td colSpan={3} className="pt-8 px-8">
                        <span className="text-headline font-bold text-black-900 dark:text-white block">
                          Aktuella datum 2022:
                        </span>{" "}
                        28 jun, 12 jul, 26 jul, 9 aug, 23 aug och 6 sep
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="rounded-sm shadow-xl shadow-black-900/5 pt-8 pb-12 bg-white w-full dark:bg-black-800">
                <div className="text-center mb-10">
                  <h3 className="font-sans text-title2 text-black-900 dark:text-white">
                    Övrig info
                  </h3>
                </div>
                <div className="relative px-8 pb-8">
                  <h4 className="text-headline font-bold dark:text-white">
                    ÅVC Fårösund
                  </h4>
                  <p className="text-headline dark:text-gray-100">
                    Förutom vanligt avfall går det även att lämna betalsopsäckar.
                    Grovavfall lämnas mot avgift, 50 kr (personbil) eller 100 kr
                    (+släpvagn). Öppettider enligt nedan.
                  </p>
                </div>
                <table className="relative w-full text-left text-headline text-black-900 dark:text-gray-100">
                  <tbody>
                    <tr>
                      <th className="pb-2 first:pl-8 last:pr-8">Måndag</th>
                      <th className="pb-2 first:pl-8 last:pr-8">Torsdag</th>
                      <th className="pb-2 first:pl-8 last:pr-8">Lördag</th>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-black-700">
                      <td className="py-2 first:pl-8 last:pr-8">7-18</td>
                      <td className="py-2 first:pl-8 last:pr-8">7-15/18</td>
                      <td className="py-2 first:pl-8 last:pr-8">9-15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AppInfoPage;
