'use client';

import * as React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { upsertProduct } from '@/lib/dbActions';
import swal from 'sweetalert';
import { CreateProductSchema, ICreateProductForm } from '@/lib/validationSchemas';
import { Option, Size, Color } from '@prisma/client';

const CustomOrderForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateProductForm>({
    resolver: yupResolver(CreateProductSchema),
  });

  const onSubmit = async (data: ICreateProductForm) => {
    const sanitizedData: ICreateProductForm = {
      ...data,
      color: (data.color || []).filter((color) => color !== undefined) as Color[],
    };

    const result = await upsertProduct(sanitizedData);
    if (result) {
      swal('Success!', 'Order saved successfully!', 'success');
      reset(); // Reset the form after successful submission
    } else {
      swal('Error!', 'Failed to save order!', 'error');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Option and Size Fields */}
        <Row className="py-1">
          <Col>
            <Form.Group controlId="formOption">
              <Form.Label>Option</Form.Label>
              <Form.Select
                {...register('option')}
                className={`form-control ${errors.option ? 'is-invalid' : ''}`}
              >
                {Object.values(Option).map((option) => (
                  <option key={option as string} value={option as string}>
                    {option as string}
                  </option>
                ))}
              </Form.Select>
              <div className="invalid-feedback">{errors.option?.message}</div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formSize">
              <Form.Label>Size</Form.Label>
              <Form.Select
                {...register('size')}
                className={`form-control ${errors.size ? 'is-invalid' : ''}`}
              >
                {Object.values(Size).map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Form.Select>
              <div className="invalid-feedback">{errors.size?.message}</div>
            </Form.Group>
          </Col>
        </Row>

        {/* Color Checkboxes */}
        <Row className="py-1">
          <Col>
            <Form.Group controlId="formColor">
              <Form.Label>Color</Form.Label>
              <Controller
                control={control}
                name="color"
                render={({ field: { value, onChange } }) => (
                  <div>
                    {Object.values(Color).map((color) => (
                      <div key={color}>
                        <Form.Check
                          type="checkbox"
                          id={`color-${color}`}
                          label={color}
                          value={color}
                          checked={value?.includes(color)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...(value || []), color]
                              : value.filter((item: Color) => item !== color);
                            onChange(newValue);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              />
              <div className="invalid-feedback">{errors.color?.message}</div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                {...register('quantity')}
                className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.quantity?.message}</div>
            </Form.Group>
          </Col>
        </Row>

        {/* Owner Field */}
        <Row className="py-1">
          <Col>
            <Form.Group controlId="formOwner">
              <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                {...register('owner')}
                className={`form-control ${errors.owner ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.owner?.message}</div>
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-3">
          Submit Order
        </Button>
      </Form>
    </Container>
  );
};

export default CustomOrderForm;
