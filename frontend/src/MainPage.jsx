import {Link} from 'react-router-dom'
import logo from './images/logo.png'
import MaleLogo from './images/MaleLogo1.png'
import FemaleLogo from './images/FemaleLogo2.png'

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#F5E9E7'
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingLeft: '120px',
          paddingRight: '40px',
          paddingTop: '140px'
        }}
      >
        <img
          src={logo}
          style={{
            width: '320px',
            marginBottom: '28px',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.08))'
          }}
        />

        <h1
          style={{
            color: '#8f7f7f',
            fontSize: '56px',
            letterSpacing: '-1px',
            marginBottom: '8px',
            lineHeight: '1.1'
          }}
        >
          Your Dream Wardrobe
        </h1>

        <div
          style={{
            fontSize: '60px',
            fontWeight: '500',
            color: '#EAB8CB',
            marginBottom: '20px'
          }}
        >
          One Swipe Away!
        </div>

        <p style={{color: '#b0a1a1', fontSize: '18px', maxWidth: '400px'}}>
          Get personalized outfit ideas based on what you already own —
          instantly.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          paddingTop: '200px',
          justifyContent: 'center',
          gap: '56px',
          paddingRight: '80px'
        }}
      >
        <Link to="/men" style={{textDecoration: 'none'}}>
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-6px)'
              e.currentTarget.style.boxShadow =
                '0 20px 60px rgba(234,184,203,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow =
                '0 12px 30px rgba(234,184,203,0.35)'
            }}
            style={{
              background: 'white',
              border: '1px solid rgba(234,184,203,0.25)',
              backdropFilter: 'blur(4px)',
              borderRadius: '24px',
              padding: '30px',
              width: '300px',
              boxShadow: '0 16px 40px rgba(234,184,203,0.35)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <img src={MaleLogo} style={{width: '100%'}} />
            <h3 style={{marginTop: '14px', color: '#555'}}>Male</h3>
          </div>
        </Link>

        <Link to="/women" style={{textDecoration: 'none'}}>
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.06)'
              e.currentTarget.style.boxShadow =
                '0 20px 60px rgba(234,184,203,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow =
                '0 12px 30px rgba(234,184,203,0.35)'
            }}
            style={{
              background: 'white',
              border: '1px solid rgba(234,184,203,0.25)',
              backdropFilter: 'blur(4px)',
              borderRadius: '24px',
              padding: '30px',
              width: '300px',
              boxShadow: '0 16px 40px rgba(234,184,203,0.35)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <img src={FemaleLogo} style={{width: '100%'}} />
            <h3 style={{marginTop: '14px', color: '#555'}}>Female</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
