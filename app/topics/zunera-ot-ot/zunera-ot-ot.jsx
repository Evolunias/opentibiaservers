import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-ot');
}

export default function ZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-ot" />;
}
