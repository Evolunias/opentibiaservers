import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-trailer');
}

export default function ZuneraOtTrailerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-trailer" />;
}
