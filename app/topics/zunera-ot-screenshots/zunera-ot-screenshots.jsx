import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-screenshots');
}

export default function ZuneraOtScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-screenshots" />;
}
