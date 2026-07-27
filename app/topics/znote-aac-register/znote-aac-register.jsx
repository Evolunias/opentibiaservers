import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-register');
}

export default function ZnoteAacRegisterKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-register" />;
}
