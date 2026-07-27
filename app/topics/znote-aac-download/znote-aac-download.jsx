import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-download');
}

export default function ZnoteAacDownloadKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-download" />;
}
