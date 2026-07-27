import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-wars');
}

export default function ZuneraOtWarsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-wars" />;
}
