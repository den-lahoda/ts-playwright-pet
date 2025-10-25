import { test, expect } from '@playwright/test';
import { PetRequest, PetResponse } from '../models/pet.model';
import petTemplate from '../data/post-pet.json';

test('POST /pet - Add pet with unique parameters', async ({ request }) => {
  const uniqueId = Date.now();
  const uniqueName = `Dog_${uniqueId}`;

  const payload: PetRequest = {
    ...petTemplate,
    id: uniqueId,
    name: uniqueName,
  };

  const response = await request.post('v2/pet', { data: payload });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body: PetResponse = await response.json();
  expect(body.id).toBe(uniqueId);
  expect(body.name).toBe(uniqueName);
});

test('POST /pet - Add pet if ID is 0', async ({ request }) => {
  const uniqueId = Date.now();
  const uniqueName = `Dog_${uniqueId}`;

  const payload: PetRequest = {
    ...petTemplate,
    id: 0,
    name: uniqueName,
  };

  const response = await request.post('v2/pet', { data: payload });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body: PetResponse = await response.json();
  expect(body.id).not.toBe(0);
  expect(body.name).toBe(uniqueName);
});

// Need more requirements
test.fail('POST /pet - Add pet with empty body', async ({ request }) => {
  const payload = {};

  const response = await request.post('v2/pet', { data: payload });

  expect(response.status()).toBe(400);
  expect(response.ok()).not.toBeTruthy();
});

// Need more requirements
test.fail('POST /pet - Add pet without "status" param', async ({ request }) => {
  const uniqueId = Date.now();
  const uniqueName = `Dog_${uniqueId}`;

  const { status, ...payloadWithoutStatus } = {
    ...petTemplate,
    id: 0,
    name: uniqueName,
  };

  const response = await request.post('v2/pet', { data: payloadWithoutStatus });

  expect(response.status()).toBe(400);
  expect(response.ok()).not.toBeTruthy();
});

// Need more requirements
test.fail('POST /pet - Add pet when "Name" param is null', async ({ request }) => {
  const uniqueId = Date.now();

  const payload = {
    ...petTemplate,
    id: uniqueId,
    name: null,
  } as unknown as PetRequest;

  const response = await request.post('v2/pet', { data: payload });

  expect(response.status()).toBe(400);
  expect(response.ok()).not.toBeTruthy();
});