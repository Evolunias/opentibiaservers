import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot');
}

export default function ZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot" />;
}
