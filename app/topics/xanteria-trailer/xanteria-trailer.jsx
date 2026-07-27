import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-trailer');
}

export default function XanteriaTrailerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-trailer" />;
}
