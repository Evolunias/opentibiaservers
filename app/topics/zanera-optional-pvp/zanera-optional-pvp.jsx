import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-optional-pvp');
}

export default function ZaneraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="zanera-optional-pvp" />;
}
