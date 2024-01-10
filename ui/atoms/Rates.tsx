'use client'

import { Button, Chip } from '@nextui-org/react'
import { AiFillCheckCircle } from 'react-icons/ai'

import Link from 'next/link'

export default function Rates() {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Plans Flexibles : Tarifs Adaptés à Votre Projet Web
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 pb-8">
          Avec DIX31, je propose l&apos;accompagnement à la création de
          solutions web tout en vous aidant à progresser. Que vous souhaitiez
          démarrer seul avec le StarterPack ou que vous préfériez une solution
          sur mesure, je suis là pour vous accompagner à chaque étape.
        </p>
        <div className="flex items-center  justify-center px-2 space-x-8 my-16">
          <div className="grid gap-6 mx-6 sm:gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
            <section className="flex flex-col justify-between h-full px-6 py-4 transition-colors duration-200 transform hover:bg-gray-300 dark:hover:bg-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  Une page Web unique
                </h3>

                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Une page web unique, idéale pour présenter un service ou un
                  produit de manière concise et captivante. Inclut des visuels
                  engageants, du contenu descriptif, et un formulaire de contact
                  pour une interaction directe avec vos visiteurs.
                </p>
                <text className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    A partir de{' '}
                  </span>
                  <span className="whitespace-nowrap">500 €</span>
                </text>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Simplicité
                    </span>
                  </div>

                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Efficacité
                    </span>
                  </div>

                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Responsive
                    </span>
                  </div>

                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Conversion
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                rel="noopener noreferrer"
                className="flex justify-center mt-8"
              >
                <Button color="primary" variant="shadow">
                  Commencez votre histoire numérique
                </Button>
              </Link>
            </section>

            <section className="flex flex-col justify-between h-full px-6 py-4 transition-colors duration-200 transform hover:bg-gray-300 dark:hover:bg-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  Site Vitrine
                </h3>

                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Votre magasin numérique pour présenter et vendre vos produits.
                  Un design attrayant, une navigation intuitive et une
                  expérience utilisateur optimisée pour transformer les
                  visiteurs en clients.
                </p>
                <text className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    A partir de{' '}
                  </span>
                  <span className="whitespace-nowrap">1 000 €</span>
                </text>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Visibilité
                    </span>
                  </div>

                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Esthétique
                    </span>
                  </div>

                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      Interactivité
                    </span>
                  </div>

                  <div className="flex items-center">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      E-commerce
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                rel="noopener noreferrer"
                className="flex justify-center mt-8"
              >
                <Button color="primary" variant="shadow">
                  Mettez en valeur vos produits
                </Button>
              </Link>
            </section>

            <section className="relative flex flex-col h-full">
              <div className="absolute -top-5 right-2 z-10">
                <Chip color="primary">Populaire</Chip>
              </div>

              <div className="flex flex-col justify-between h-full px-6 py-4 transition-colors duration-200 transform bg-gray-700 hover:bg-gray-800 rounded-lg dark:bg-teal-900 dark:hover:bg-teal-800">
                <div>
                  <h3 className="text-lg font-medium text-gray-100">
                    Site Dynamique
                  </h3>

                  <p className="mt-4 text-gray-300">
                    Un site web dynamique avec un backend pour une mise à jour
                    facile du contenu. Idéal pour des projets complexes comme{' '}
                    <Link
                      href="https://www.activ-savoirs.com/"
                      className="text-blue-500 hover:text-blue-700 dark:text-orange-600 dark:hover:underline"
                      target="_blank"
                    >
                      Activ&apos;Savoirs
                    </Link>{' '}
                    ou{' '}
                    <Link
                      href="https://www.club306.fr/"
                      className="text-blue-500 hover:text-blue-700 dark:text-orange-600 dark:hover:underline"
                      target="_blank"
                    >
                      Club306
                    </Link>
                    , offrant flexibilité et personnalisation.
                  </p>
                  <text className="mt-2 text-4xl font-semibold text-gray-200 dark:text-gray-100">
                    <span className="text-base font-normal">A partir de </span>
                    <span className="whitespace-nowrap">2 500 €</span>
                  </text>

                  <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                      <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                      <span className="mx-4 text-gray-300">
                        Personnalisation
                      </span>
                    </div>

                    <div className="flex items-center">
                      <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                      <span className="mx-4 text-gray-300">Flexibilité</span>
                    </div>

                    <div className="flex items-center">
                      <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                      <span className="mx-4 text-gray-300">Innovation</span>
                    </div>

                    <div className="flex items-center">
                      <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600" />
                      <span className="mx-4 text-gray-300">
                        Gestion de contenu
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  rel="noopener noreferrer"
                  className="flex justify-center mt-8"
                >
                  <Button color="primary" variant="shadow">
                    Donnez vie à vos idées
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}