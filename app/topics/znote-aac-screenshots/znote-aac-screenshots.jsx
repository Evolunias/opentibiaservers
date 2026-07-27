import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-screenshots');
}

export default function ZnoteAacScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-screenshots" />;
}
