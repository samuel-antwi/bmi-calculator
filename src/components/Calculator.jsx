import React, { useContext } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading';
import { UserDetailsContext } from '../context/UserDetailsContext';
import {
  Container,
  Form,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Alert,
} from 'react-bootstrap';

const Calculator = () => {
  const {
    isSubmitting,
    goBack,
    userDetails,
    bmi,
    toggleResults,
    weight,
    indicator,
    isLoading,
    handleChange,
    resetForm,
    handleForm,
  } = useContext(UserDetailsContext);

  return (
    <React.Fragment>
      <Styles>
        <Container className='py-5'>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <p className='lead'>
                Use this calculator to check your body mass index (BMI) and find
                out if you're a healthy weight.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className='bg-primary p-1'>
              <h4 className='text-center font-weight-bold text-white p-3'>
                BMI calculator
              </h4>
              <div className='calculator-wrapper  p-3'>
                {toggleResults ? (
                  <React.Fragment>
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <React.Fragment>
                        <button
                          onClick={() => goBack()}
                          className='btn btn-primary my-3'>
                          <i className='fas fa-arrow-circle-left mr-2'></i>Back
                        </button>
                        <div className='results p-4'>
                          <div className='d-flex justify-content-between'>
                            <div>
                              <h4 className='font-weight-bold text-muted'>
                                BMI
                              </h4>
                              <h1 className='font-weight-bold display-3'>
                                {bmi}
                              </h1>
                            </div>
                            {/* show weight indicator based on bmi */}
                            <div>
                              <p className='lead'>
                                Your results suggests you are <br />
                              </p>
                              {bmi > 18.5 && bmi < 24.9 && (
                                <h4 className='text-center text-muted'>
                                  {weight.healthy}
                                </h4>
                              )}
                              {bmi < 18.5 && (
                                <h4 className='text-center text-muted'>
                                  {weight.underWeight}
                                </h4>
                              )}

                              {bmi > 24.9 && bmi < 29.9 && (
                                <h4 className='text-center text-muted'>
                                  {weight.overweight}
                                </h4>
                              )}
                              {bmi > 30 && (
                                <h4 className='text-center text-muted'>
                                  {weight.obese}
                                </h4>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* shows bmi results information */}
                        <div className='results-info my-4 bg-light p-3'>
                          {bmi < 18.5 && (
                            <>
                              <p>
                                If you are receiving treatment for an eating
                                disorder then this tool is NOT to be used.
                              </p>
                              <p>
                                There may be an underlying medical cause for
                                your weight, or your diet may not be providing
                                you with enough calories. We suggest you discuss
                                this with your GP.
                              </p>
                            </>
                          )}
                          {bmi > 18.5 &&
                            bmi < 24.9 &&
                            userDetails.ethnicGroup === 'Black African' && (
                              <>
                                <p>
                                  You’re in the healthy weight range but your
                                  ethnicity increases your risk of health
                                  problems like type 2 diabetes with a BMI of 23
                                  or more.
                                </p>
                                <p>
                                  Keep an eye on your BMI and try to avoid
                                  putting on any more weight.
                                </p>
                                <p>
                                  Check out our advice on healthy eating and
                                  physical activity. If you're concerned about
                                  your weight speak to your GP.
                                </p>
                              </>
                            )}
                          {bmi > 18.5 &&
                            bmi < 24.9 &&
                            userDetails.ethnicGroup === 'Not stated' && (
                              <>
                                <p>
                                  You are in the healthy weight range. Keep an
                                  eye on your weight and try to stay in the
                                  healthy range.
                                </p>
                              </>
                            )}
                          {bmi > 18.5 &&
                            bmi < 24.9 &&
                            userDetails.ethnicGroup === 'White' && (
                              <>
                                We suggest you maintain your weight. We've got
                                lots of workouts and activity ideas to help you
                                stay active.
                              </>
                            )}
                          {bmi > 24.9 && (
                            <>
                              <p>
                                Losing more weight can have health benefits,
                                such as lowering your blood pressure and
                                reducing your risk of developing type 2
                                diabetes.
                              </p>
                              <p>
                                You should work towards achieving a healthier
                                weight over time. We suggest you visit your GP
                                to discuss.
                              </p>
                            </>
                          )}
                          {/* BMI Ranges */}
                          <div className='bmi-ranges'>
                            <h4 className='mt-4 font-weight-bold text-muted'>
                              BMI Ranges
                            </h4>

                            <Alert variant='warning'>
                              <Row>
                                <Col>
                                  <span className='font-weight-bold'>
                                    Underweight
                                  </span>
                                </Col>
                                <Col>
                                  <span>BMI less than 18.5</span>
                                </Col>
                              </Row>
                            </Alert>
                            <Alert variant='success'>
                              <Row>
                                <Col>
                                  <span className='font-weight-bold'>
                                    Healthy weight
                                  </span>
                                </Col>
                                <Col>
                                  <span>BMI between 18.5 and 24.9</span>
                                </Col>
                              </Row>
                            </Alert>
                            <Alert variant='danger'>
                              <Row>
                                <Col>
                                  <span className='font-weight-bold'>
                                    Overweight
                                  </span>
                                </Col>
                                <Col>
                                  <span>BMI btween 25 and 30</span>
                                </Col>
                              </Row>
                            </Alert>
                            <Alert className='obese'>
                              <Row>
                                <Col>
                                  <span className='font-weight-bold'>
                                    Obese
                                  </span>
                                </Col>
                                <Col>
                                  <span>BMI over 30</span>
                                </Col>
                              </Row>
                            </Alert>
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <Form onSubmit={handleForm}>
                    <Row>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label className='lead'>Height</Form.Label>
                          <p className='text-muted'>Centimeters</p>
                          <Form.Control
                            className={
                              !userDetails.height.length && isSubmitting
                                ? 'form-error'
                                : ''
                            }
                            required
                            onChange={handleChange}
                            type='number'
                            name='height'
                            value={userDetails.height}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label className='lead'>Weight</Form.Label>
                          <p className='text-muted'>Kg</p>
                          <Form.Control
                            required
                            onChange={handleChange}
                            name='weight'
                            value={userDetails.weight}
                            type='number'
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label className='lead'>Age</Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            name='age'
                            value={userDetails.age}
                            type='number'
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <div className='mb-3'>
                          <Form.Label className='lead'>Gender</Form.Label>
                          <Accordion>
                            <Accordion.Toggle
                              as={Button}
                              variant='link'
                              eventKey='0'>
                              <u> Why are we asking?</u>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0'>
                              <Card className='my-3'>
                                <Card.Body className='text-muted'>
                                  BMI centile is gender specific. For both male
                                  and female, we give more personalised
                                  information based on whether you are male or
                                  female.
                                </Card.Body>
                              </Card>
                            </Accordion.Collapse>
                          </Accordion>
                          <Form.Group>
                            <Form.Control
                              className='text-muted'
                              onChange={handleChange}
                              value={userDetails.sex}
                              name='sex'
                              as='select'>
                              <option defaultValue>Male</option>
                              <option>Female</option>
                            </Form.Control>
                          </Form.Group>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <Form.Label className='lead'>
                          Ethnic Group (Optional)
                        </Form.Label>
                        <Accordion>
                          <Accordion.Toggle
                            as={Button}
                            variant='link'
                            eventKey='0'>
                            <u> Why are we asking?</u>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey='0'>
                            <Card className='my-3'>
                              <Card.Body className='text-muted'>
                                Black, Asian and other minority ethnic groups
                                with a BMI of 23 or more have a higher risk of
                                getting type 2 diabetes and other long term
                                illnesses
                              </Card.Body>
                            </Card>
                          </Accordion.Collapse>
                        </Accordion>
                        <Form.Group>
                          <Form.Control
                            className='text-muted'
                            onChange={handleChange}
                            value={userDetails.ethnicGroup}
                            name='ethnicGroup'
                            as='select'>
                            <option defaultValue>Not stated</option>
                            <option>White</option>
                            <option>Black Caribbean</option>
                            <option>Black African</option>
                            <option>Indian</option>
                            <option>Pakistani</option>
                            <option>Chinese</option>
                            <option>Mixed</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <Form.Label className='lead'>Activity level</Form.Label>
                        <p className='text-muted'>
                          So your results can be personalised
                        </p>
                        <Accordion>
                          <Accordion.Toggle
                            as={Button}
                            variant='link'
                            eventKey='0'>
                            <u> What counts?</u>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey='0'>
                            <Card className='my-3'>
                              <Card.Body className='text-muted'>
                                Physical activity is anything that makes you
                                breathe faster and feel warmer. It could be:
                                <ul>
                                  <li>brisk walking</li>
                                  <li>running</li>
                                  <li>cycling</li>
                                  <li>swimming</li>
                                  <li>dancing</li>
                                  <li>an active job</li>
                                  <li>pushing a lawnmower</li>
                                  <li>football</li>
                                  <li>tenis</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Accordion.Collapse>
                        </Accordion>
                        <Form.Group>
                          <Form.Control
                            className='text-muted'
                            onChange={handleChange}
                            value={userDetails.activityLevel}
                            name='activityLevel'
                            as='select'>
                            <option>Inactive</option>
                            <option>Moderate</option>
                            <option>Active</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <button type='submit' className='btn btn-success btn-lg'>
                        Calculate
                      </button>
                      <button onClick={resetForm} className='reset-btn mt-2'>
                        Reset
                      </button>
                    </div>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default Calculator;

const Styles = styled.div`
  .calculator-wrapper {
    background: #fff;
  }
  .calculator-wrapper button {
    box-shadow: none;
  }
  .reset-btn {
    color: blue;
    text-decoration: underline;
    border: none;
  }

  .results {
    border-top: 8px solid gray;
    background: #e5e5e5;
  }
  .weight-indicator {
    font-weight: bold !important;
  }
  .form-error {
    border-color: crimson !important;
  }
  .form-control:focus {
    box-shadow: none;
  }
  .results-info {
    border-top: 6px solid blue;
  }

  .obese {
    background: crimson;
    color: #fff;
  }
`;
