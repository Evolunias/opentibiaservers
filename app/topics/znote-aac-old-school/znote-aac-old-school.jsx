import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-old-school');
}

export default function ZnoteAacOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-old-school" />;
}
