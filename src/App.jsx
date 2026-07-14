import { useState } from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-brand-orange/20 text-center">
        <h1 className="text-3xl font-bold text-brand-brown dark:text-brand-orange mb-4">
          Monitoria de Sociologia
        </h1>
        <p>
          Plataforma de apoio baseada no livro "Do seu jeito".
        </p>
        <button className="bg-brand-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-brown transition-colors duration-300">
          Começar Estudos
        </button>
      </div>
    </div>
  )
}