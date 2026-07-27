import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-wars');
}

export default function ZaneraWarsKeywordPage() {
  return <StaticKeywordPage slug="zanera-wars" />;
}
