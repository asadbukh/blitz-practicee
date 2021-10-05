import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCorgi from "app/corgis/queries/getCorgi"
import deleteCorgi from "app/corgis/mutations/deleteCorgi"
import IncrementBoop from "app/corgis/mutations/IncrementBoop"

export const Corgi = () => {
  const router = useRouter()
  const corgiId = useParam("corgiId", "number")
  const [deleteCorgiMutation] = useMutation(deleteCorgi)
  const [updateCorgiMutation] = useMutation(IncrementBoop)
  const [corgi, { refetch }] = useQuery(getCorgi, { id: corgiId })

  const incrementBoop = async () => {
    await updateCorgiMutation({ id: corgiId! });
    refetch()
  }

  return (
    <>
      <Head>
        <title>Corgi {corgi.id}</title>
      </Head>

      <div>
        <h1>Corgi {corgi.id}</h1>
        <img
          src={corgi.image}
          alt={corgi.name}
          style={{
            width: 200,
            height: 200,
            objectFit: "cover",
            display: "block"
          }}
        />
        <button onClick={incrementBoop}>Increment the boop ({corgi.boops})</button>
        <pre>{JSON.stringify(corgi, null, 2)}</pre>

        <Link href={Routes.EditCorgiPage({ corgiId: corgi.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteCorgiMutation({ id: corgi.id })
              router.push(Routes.CorgisPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowCorgiPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.CorgisPage()}>
          <a>Corgis</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Corgi />
      </Suspense>
    </div>
  )
}

ShowCorgiPage.authenticate = true
ShowCorgiPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowCorgiPage
