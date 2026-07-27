import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-website');
}

export default function ZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-website" />;
}
