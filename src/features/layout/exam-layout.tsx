import { SoalUjianType } from '@/libs/interface'
import {
  useCreateSaveJawabanMutation,
  useGetSoalUjianQuery,
} from '@/store/slices/cbtAPI'
import { useEffect, useState } from 'react'
import {
  ExamHeader,
  ExamNavigation,
  ExamNavigationHeader,
  ExamProgress,
  ExamSoalAnswer,
  ExamSoalButton,
  ExamSoalHeader,
  ExamSoalQuestion,
} from '../exam'
import clsx from 'clsx'
import { konversiFormat } from '@/libs/helpers/convert-jawaban'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import Loading from '@/components/Loading'
import { DialogHelpers } from '@/components/ui/dialog'
import { ExamNavigationModal } from '../exam/exam-navigation-modal'

export default function ExamLayout() {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const soalParams = searchParams.get('soal')
  const kodeSoal = searchParams.get('soal')
  const [dataSoal, setDataSoal] = useState<SoalUjianType[]>([])
  const noSoalParams = searchParams.get('nomor') ?? 1
  const [noSoal, setNoSoal] = useState<number>(Number(noSoalParams))
  const [isShow, setIsShow] = useState<boolean>(true)
  const [isShowSoal, setIsShowSoal] = useState<boolean>(true)
  const [isShowNav, setIsShowNav] = useState<boolean>(true)
  const [ukuranSoal, setUkuranSoal] = useState<string>('sm')

  const soalNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.question
  const idSoalNow = dataSoal?.find((item) => Number(item?.number) == noSoal)?.id
  const jawabanNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.options
  const typeSoalNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.type
  const nomorSoalNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.number

  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  const {
    data,
    isLoading: ujianLoading,
    isFetching: ujianFetching,
  } = useGetSoalUjianQuery(
    {
      id_ujian: soalParams,
    },
    {
      skip:
        soalParams === null || soalParams === undefined || soalParams === '',
    },
  )

  useEffect(() => {
    if (data?.data) {
      setDataSoal(data?.data)
    }
  }, [data?.data])

  // ----- Submit -----
  const [submitJawaban, { isLoading, isSuccess, isError, error }] =
    useCreateSaveJawabanMutation()
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const handleSelesai = () => {
    const data = konversiFormat(smartlearningData)

    try {
      submitJawaban({ data: data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Jawaban berhasil disimpan!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      localStorage.removeItem('smartlearning')
      localStorage.removeItem('mulaiujian')
      localStorage.removeItem('bookmarks')
      setTimeout(() => {
        navigate('/app/cbt')
      }, 3000)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isError, error])

  const isDisabled = ujianLoading || isLoading || ujianFetching

  return (
    <div className="scrollbar flex h-full max-h-screen flex-col overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* --- HEader --- */}
      <ExamHeader />
      <ExamProgress totalSoal={dataSoal?.length} />
      <div className="scrollbar h-full flex-1 overflow-y-auto px-80 py-32 phones:px-32">
        <div className="scrollbar grid h-full grid-cols-12 gap-32 overflow-y-auto">
          {/* ---- Soal ---- */}
          <div
            className={clsx(
              'scrollbar flex h-full flex-col overflow-y-auto rounded-2xl phones:col-span-12',
              {
                'col-span-9': isShow,
                'col-span-11': !isShow,
              },
            )}
          >
            <ExamSoalHeader
              noSoal={noSoal}
              totalSoal={dataSoal?.length}
              setUkuranSoal={setUkuranSoal}
              isShow={isShowSoal}
              setIsShow={setIsShowSoal}
            />
            <div className="scrollbar h-full flex-1 overflow-y-auto">
              {isShowSoal &&
                (isDisabled ? (
                  <Loading />
                ) : (
                  <div
                    className={clsx('flex flex-col gap-y-24 bg-white p-32', {
                      'text-[2rem]': ukuranSoal?.includes('sm'),
                      'text-[2.4rem]': ukuranSoal?.includes('md'),
                      'text-[2.8rem]': ukuranSoal?.includes('lg'),
                    })}
                    style={{
                      borderBottomLeftRadius: '1rem',
                      borderBottomRightRadius: '1rem',
                    }}
                  >
                    <ExamSoalQuestion question={soalNow} />
                    <ExamSoalAnswer
                      optionsSoal={jawabanNow}
                      typeSoal={typeSoalNow}
                      ukuranSoal={ukuranSoal}
                      noSoal={Number(nomorSoalNow)}
                      kodeSoal={kodeSoal}
                      idSoal={idSoalNow}
                    />
                    <ExamSoalButton
                      noSoal={noSoal}
                      kodeSoal={kodeSoal}
                      setNoSoal={setNoSoal}
                      totalSoal={dataSoal?.length}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* ---- Navigasi ---- */}
          <div
            className={clsx(
              'scrollbar h-full overflow-y-auto rounded-2xl phones:col-span-12',
              {
                'col-span-3': isShow,
                'col-span-1': !isShow,
              },
            )}
          >
            <div className="flex h-full flex-col">
              <ExamNavigationHeader
                setIsShowNav={setIsShowNav}
                isShowNav={isShowNav}
                isShow={isShow}
                setIsShow={setIsShow}
              />
              {isShowNav && (
                <div className="scrollbar h-full flex-1 overflow-y-auto">
                  {isShow ? (
                    <div
                      className="flex h-full flex-col gap-y-32 bg-white p-32"
                      style={{
                        borderBottomLeftRadius: '1rem',
                        borderBottomRightRadius: '1rem',
                      }}
                    >
                      <div className="scrollbar h-full flex-1 overflow-y-auto">
                        <ExamNavigation
                          kodeSoal={kodeSoal}
                          totalSoal={dataSoal.length}
                          noSoal={noSoal}
                          setNoSoal={setNoSoal}
                        />
                      </div>
                      {/* --- Selesai --- */}
                      <div
                        className="flex"
                        onClick={() => {
                          if (!isDisabled) {
                            setIsShowModal(true)
                          }
                        }}
                      >
                        <div className="rounded-xl bg-emerald-500 px-32 py-16 font-bold uppercase tracking-1.5 text-white hover:cursor-pointer hover:bg-emerald-700">
                          Selesai{' '}
                          {isDisabled && (
                            <span className="animate-spin duration-200">
                              <Loader2 size={16} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsShow(true)}
                      className="flex h-full items-center justify-center bg-white hover:cursor-pointer"
                    >
                      <p
                        className="text-[2.4rem] uppercase tracking-6"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                        }}
                      >
                        Tampilkan Jawaban Anda
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <DialogHelpers
        title={
          <div className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary">
            <Link to="/">
              Smart<span className="text-primary-shade-200">Learning</span>
            </Link>
          </div>
        }
        open={isShowModal}
        setOpen={setIsShowModal}
        height="auto"
        noPadding
        isPhoneAuto
        customComponent={
          <ExamNavigationModal
            setIsShow={setIsShowModal}
            handleSubmit={handleSelesai}
            totalSoal={dataSoal?.length}
          />
        }
      />
    </div>
  )
}
