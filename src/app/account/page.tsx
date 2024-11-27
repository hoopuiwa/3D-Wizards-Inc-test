import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { Row, Col, Container } from 'react-bootstrap';

/** Account page */
const AccountPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  return (
    <main>
      <Container id="account-page" fluid className="py-3">
        <Row className="justify-content-center align-items-center m-3">
          <Col md={8}>
            <h3 className="py-4">Cart:</h3>
            <p>
              Cart list items here:
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center m-3">
          <Col md={8}>
            <h3 className="py-4">Purchase History</h3>
            <p>
              Purchase history list here:
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default AccountPage;
