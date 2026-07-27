import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-sweden');
}

export default function WithTrainersServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-sweden" />;
}
