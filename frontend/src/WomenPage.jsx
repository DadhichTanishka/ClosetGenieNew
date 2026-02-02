import {useState} from 'react'
import Menu from './Navbar'
import {getOutfitSuggestions} from './api'
import InputBox from './InputBox'
import HamsterLoader from './HamsterLoader'
import ImageBox from './ImageBox'

const suggestions = [
  'Black dress',
  'Floral skirt',
  'White blouse',
  'Denim jacket',
  'High-waist jeans',
  'Red heels',
  'Leather handbag',
  'Silk scarf',
  'Midi dress',
  'Pink cardigan',
  'Gold earrings',
  'Ankle boots',
  'Wrap top',
  'Pleated skirt',
  'White sneakers'
]
function WomenPage() {
  const [showModal, setShowModal] = useState(true)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState(null)

  const suggestionInputText = (text) => setInput(text)

  const searchSuggestions = async () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setError('')
    setLoading(true)
    try {
      const data = await getOutfitSuggestions(trimmed, 'female')
      setResults(data)
      setShowModal(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{background: '#F5E9E7', minHeight: '100vh'}}>
      <Menu />

      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '90%'
            }}
          >
            <h2 style={{marginTop: 0}}> What do you want to style?</h2>
            <InputBox
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onSearch={searchSuggestions}
              disabled={loading}
            />
            <p style={{marginBottom: '8px', fontSize: '14px', color: '#666'}}>
              {loading ? 'please wait...' : 'Suggestions:'}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}
            >
              {loading ? (
                <HamsterLoader />
              ) : (
                suggestions.map((sug) => (
                  <button
                    key={sug}
                    type="button"
                    onClick={() => suggestionInputText(sug)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f7e9f1'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white'
                    }}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '22px',
                      border: '1px solid #EAB8CB',
                      background: 'white',
                      cursor: 'pointer',
                      fontSize: '13.5px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {sug}
                  </button>
                ))
              )}
            </div>
            {error && (
              <p style={{color: 'red', fontSize: '14px', marginBottom: '12px'}}>
                {error}
              </p>
            )}
          </div>
        </div>
      )}
      {!showModal && results && (
        <div
          style={{
            padding: '30px 20px 40px',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <h2
            style={{
              fontWeight: '500',
              fontSize: '28px',
              color: '#8f7f7f',
              marginBottom: '12px'
            }}
          >
            Styling ideas for <strong>{input}</strong>
          </h2>

          <p
            style={{
              color: '#b2a3a3',
              marginBottom: '50px',
              fontSize: '15px'
            }}
          >
            Curated outfit pieces that go perfectly together
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '32px',
              justifyItems: 'center'
            }}
          >
            {results.map((res, i) =>
              res.shopping && res.shopping.length > 0
                ? res.shopping.map((item, j) => (
                    <a
                      key={j - i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{display: 'block', textDecoration: 'none'}}
                    >
                      <ImageBox item={item} />
                    </a>
                  ))
                : null
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default WomenPage