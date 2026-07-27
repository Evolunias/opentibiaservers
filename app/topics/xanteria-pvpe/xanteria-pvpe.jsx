import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe');
}

export default function XanteriaPvpeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe" />;
}
